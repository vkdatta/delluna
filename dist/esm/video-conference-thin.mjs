export const name="video-conference-thin";
export const id="dl_8ae0c5b2f934b879de0d";
export const url=new URL("../icons/video-conference-thin.svg?v=6a2a79f756275ee02a76364c07e7fed7e6b40c07f6e71f25705fdca81f565405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
