export const name="crown";
export const id="dl_881bcbd2164d46ee96e8";
export const url=new URL("../icons/crown.svg?v=6e44c0899a0a39c9f6944250e58a97380dfb4a8008fc2db77f3fdb4bceec57ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
