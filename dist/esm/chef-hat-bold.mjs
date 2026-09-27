export const name="chef-hat-bold";
export const id="dl_44bf5fff5aca49409293";
export const url=new URL("../icons/chef-hat-bold.svg?v=7fc7cd0429a013fcab63ee854c02e6af06659e6afd02e8d16d90cef5f8257ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
