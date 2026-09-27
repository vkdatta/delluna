export const name="text-aa-thin";
export const id="dl_de633faca562f118ed4f";
export const url=new URL("../icons/text-aa-thin.svg?v=07c27b32c59fa907547388e9e2bca4e3103e14ea482f48ffa4fcbf1aa5737278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
