export const name="pencil-slash-fill";
export const id="dl_2077a51c4b044a468f96";
export const url=new URL("../icons/pencil-slash-fill.svg?v=9ec2b850f2192bd91445621c5a46f8a7621c2a7b25b7f9e8f31b779c0c54375c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
