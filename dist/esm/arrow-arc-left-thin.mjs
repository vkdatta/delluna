export const name="arrow-arc-left-thin";
export const id="dl_f11664ef750d4cd6a9ff";
export const url=new URL("../icons/arrow-arc-left-thin.svg?v=9fa646a05485678139eb422359790dc7b358d91dc779efc350075b592d8c69f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
