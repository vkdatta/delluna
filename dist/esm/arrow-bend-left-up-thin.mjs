export const name="arrow-bend-left-up-thin";
export const id="dl_c1957a47cffb405581db";
export const url=new URL("../icons/arrow-bend-left-up-thin.svg?v=d8b63371bb1ca41e6cb47fdb3d8849e2a3f41523750e98aa6eda78b9199ed530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
