export const name="pipe-duotone";
export const id="dl_83c733cb37f1418585a9";
export const url=new URL("../icons/pipe-duotone.svg?v=dc89bd48b0ae66411cefa5a1105cc3f080572fb8a490526ba263785468e6c216",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
