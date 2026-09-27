export const name="boxing-glove-light";
export const id="dl_6ff8d1ec1ee545858953";
export const url=new URL("../icons/boxing-glove-light.svg?v=c8edaa74e536e5e5fbc0b4c8989bf6f603df429352c5443917f0075a2f18e060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
