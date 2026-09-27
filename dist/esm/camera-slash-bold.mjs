export const name="camera-slash-bold";
export const id="dl_0aeb1eead2fd41ba92ed";
export const url=new URL("../icons/camera-slash-bold.svg?v=76678733619aefedd6ab0feccc68f25fd2079c19e2eaad6fe580bbef634f1317",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
