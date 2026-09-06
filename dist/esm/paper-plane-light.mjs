export const name="paper-plane-light";
export const id="dl_971d0203c42c43b5895c";
export const url=new URL("../icons/paper-plane-light.svg?v=3d480e01c849a730ca95089f993b5fa79c78cef5c1acffad1ab5f2d9facde5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
