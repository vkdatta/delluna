export const name="blueprint-thin";
export const id="dl_2368c92cd8604f87a54b";
export const url=new URL("../icons/blueprint-thin.svg?v=5804e440d4bc483844349c67978e4f5986631e4849ec55679e48d5b464dee786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
