export const name="chef-hat";
export const id="dl_2578dd8c81cb42849934";
export const url=new URL("../icons/chef-hat.svg?v=4bb6ae525ece6178d428683e952389fa91869a96141fbae6ba9f36b1e9d3c10b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
