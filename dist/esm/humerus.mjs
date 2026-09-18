export const name="humerus";
export const id="dl_126cf2c6547e47eea2eb";
export const url=new URL("../icons/humerus.svg?v=902a945d6a9044a2c49de4c99aaf12a6dd9a9d8f5d97ab716ac4a427a4e59c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
