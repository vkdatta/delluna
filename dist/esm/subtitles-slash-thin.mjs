export const name="subtitles-slash-thin";
export const id="dl_fb252ea9580e415393e2";
export const url=new URL("../icons/S/subtitles-slash-thin.svg?v=74ba129f9bd70d846ebb7afd0b808ecffdae69f0f4bf82f61f3d6af5e9a6decb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
