export const name="music_history";
export const id="dl_fa5cf4baa135aa64bc05";
export const url=new URL("../icons/music_history.svg?v=7951f071c4736bed7fe4d826d853742f13c3f8543b0819ac3ce22a54037bccbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
