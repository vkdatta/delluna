export const name="crop_portrait";
export const id="dl_5b53acf137cf841dc27d";
export const url=new URL("../icons/crop_portrait.svg?v=b224847ba0ddb36a5b382118ca2d53ee3c028eab95bcd7f4d936ae021a007640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
