export const name="disc-light";
export const id="dl_e5c5a8593b564eae9f31";
export const url=new URL("../icons/disc-light.svg?v=04d4c6a705028edcc081795766f8e8128449e682dac05e9e175b658af1524acb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
