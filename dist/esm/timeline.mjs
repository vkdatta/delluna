export const name="timeline";
export const id="dl_e0346f4eb5234093a02f";
export const url=new URL("../icons/timeline.svg?v=e1a7e3c5cb0cc62067145d7b9e6e17258f10ddd24c85cd0514619b1bce4443c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
