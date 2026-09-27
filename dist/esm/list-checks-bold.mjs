export const name="list-checks-bold";
export const id="dl_cf3be4551a79499b97cb";
export const url=new URL("../icons/list-checks-bold.svg?v=902bd8ca3569da1eb4f2c5e40d06f38b54bda925b52420cda34fad2071fc5178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
