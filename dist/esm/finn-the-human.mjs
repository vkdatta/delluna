export const name="finn-the-human";
export const id="dl_9d23827e48b54bb1b5e8";
export const url=new URL("../icons/finn-the-human.svg?v=df6005e1b0994db62db44ac475bd1021e549cb6ded68121dbece38b2d72499ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
