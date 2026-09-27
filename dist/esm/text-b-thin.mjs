export const name="text-b-thin";
export const id="dl_da0aae8660a97948b06d";
export const url=new URL("../icons/text-b-thin.svg?v=927c6b6a1ca5b0db6351b926b60d987c18b86956adcb476260beae1eba86b191",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
