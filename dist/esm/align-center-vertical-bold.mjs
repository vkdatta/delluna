export const name="align-center-vertical-bold";
export const id="dl_7c1d0b9c238e416d921b";
export const url=new URL("../icons/align-center-vertical-bold.svg?v=f9e6178f54d8c6cd6d6032b3f0ddff72c6cc9825a49eed22d725d8666a20ff20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
