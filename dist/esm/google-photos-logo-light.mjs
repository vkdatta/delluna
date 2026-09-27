export const name="google-photos-logo-light";
export const id="dl_9ae0f6982e4f4098a473";
export const url=new URL("../icons/google-photos-logo-light.svg?v=5f02a43ed8531fded53b5dd52f10a411db44ffcf003d1a7b42fa7accf2257b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
