export const name="sound_detection_glass_break";
export const id="dl_82e81078985fdba2d42f";
export const url=new URL("../icons/sound_detection_glass_break.svg?v=c1de90ead4228f1fd7fd1b3ec39445396769e2db9efd8f7da264450fb44a1cf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
