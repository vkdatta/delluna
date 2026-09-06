export const name="lucid_1-banknote-x";
export const id="dl_be0e4f0492ad4ed9b6f4";
export const url=new URL("../icons/lucid_1-banknote-x.svg?v=8fc7702b1271dd9b6f4ee6d18292587831ff48aba4eb19d238166abc284de480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
