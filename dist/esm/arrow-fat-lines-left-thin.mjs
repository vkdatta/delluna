export const name="arrow-fat-lines-left-thin";
export const id="dl_1bdf3b5e79bf40449499";
export const url=new URL("../icons/arrow-fat-lines-left-thin.svg?v=6ac20ef56431ee56bd7ad9eaa252a60bdcabd3d22e1479057d1ef5c8c7a3b5d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
