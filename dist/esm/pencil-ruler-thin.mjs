export const name="pencil-ruler-thin";
export const id="dl_5f66c903bd064a0ebd9b";
export const url=new URL("../icons/pencil-ruler-thin.svg?v=f6ecae91d24d44863bef8b84d985932e29ee2dbdda6433ca13f2b94044408d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
