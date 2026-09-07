export const name="flying-saucer-thin";
export const id="dl_33e9945018034fe59aeb";
export const url=new URL("../icons/flying-saucer-thin.svg?v=a7ed18c7efd034791d5d63f107a813aba2a7d23bf2845c55d9e33daa53b524f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
