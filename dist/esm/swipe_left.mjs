export const name="swipe_left";
export const id="dl_2a1209124f24c2c7ae7b";
export const url=new URL("../icons/swipe_left.svg?v=9f3790efc07d6725e06944c43fbed60e7ea8353bef6ff3ff5b45925e1f8c419e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
