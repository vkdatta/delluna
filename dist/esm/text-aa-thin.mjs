export const name="text-aa-thin";
export const id="dl_87abef5db3686ffa45f1";
export const url=new URL("../icons/text-aa-thin.svg?v=8ceceaf89dde2857fbef36af06a9c9029976819de2eb32836b3e6473da4cb8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
