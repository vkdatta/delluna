export const name="not-equals-light";
export const id="dl_eaa51ca7a9884e9a9dc1";
export const url=new URL("../icons/not-equals-light.svg?v=b08439540d729d271656882be6258d746721def46980a911fe783da950de6005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
