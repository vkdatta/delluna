export const name="flower-lotus-thin";
export const id="dl_26af8a4ce02945c28caf";
export const url=new URL("../icons/flower-lotus-thin.svg?v=6e2da4b10e2f750c46f6de5cc757ee6627c190895e785b9d8d173b4bd8de4db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
