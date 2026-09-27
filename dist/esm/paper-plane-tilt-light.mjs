export const name="paper-plane-tilt-light";
export const id="dl_353cd98826804644b525";
export const url=new URL("../icons/paper-plane-tilt-light.svg?v=ce014afa28b04c583308ed68c268383999f089dc4f20bf9b22b5b0db6f101e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
