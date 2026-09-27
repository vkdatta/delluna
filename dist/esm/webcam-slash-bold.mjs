export const name="webcam-slash-bold";
export const id="dl_2dac317fc028f79024f2";
export const url=new URL("../icons/webcam-slash-bold.svg?v=8116d30411c4eb010f1f4ea4e40d95235c0480e13f31af849194d2cb75e4482f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
