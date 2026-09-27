export const name="test-tube-diagonal";
export const id="dl_8321ee3045764f8096f8";
export const url=new URL("../icons/test-tube-diagonal.svg?v=bae6ddc0486deadaf944942c528ae129af9862a3eae103f9961f5eda950894f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
