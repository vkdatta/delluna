export const name="text-initial";
export const id="dl_a22c50ad5704498da77a";
export const url=new URL("../icons/text-initial.svg?v=a45961c45a5c7a301ab058c850ce535eaed739c4239b39ad102108e94cd70a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
