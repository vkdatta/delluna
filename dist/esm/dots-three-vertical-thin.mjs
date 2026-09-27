export const name="dots-three-vertical-thin";
export const id="dl_d43e8cedc35446dba2bc";
export const url=new URL("../icons/dots-three-vertical-thin.svg?v=0cc8feb933d5fa8b0cf1ae06951d27066b8b9411e4b776d79c8c52b45d235a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
