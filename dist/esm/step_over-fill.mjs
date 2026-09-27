export const name="step_over-fill";
export const id="dl_43fbb8b82621823c19ce";
export const url=new URL("../icons/step_over-fill.svg?v=75b18d3cf184b91faa40239d1ad320241b6e69b7bf92c8c582a995643a47c877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
