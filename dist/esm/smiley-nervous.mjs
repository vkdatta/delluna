export const name="smiley-nervous";
export const id="dl_a799424e493ed686e901";
export const url=new URL("../icons/smiley-nervous.svg?v=baf4c94a8af7c229f8ca49783317c4916c9d2bee36eb580663760629d7606c2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
