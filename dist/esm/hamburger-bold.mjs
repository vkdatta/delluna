export const name="hamburger-bold";
export const id="dl_9b19cb9e2e6145f9860e";
export const url=new URL("../icons/hamburger-bold.svg?v=d40dd36c77b177ab41f8af107e2d99e4650c299542af808dc31bff12a0b025ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
