export const name="club-thin";
export const id="dl_d4cb136752b84f76bcf7";
export const url=new URL("../icons/club-thin.svg?v=0aaae4ff86baf2fb8b71808ff60bf74e9c3e29dda6ee57fc3a774ce5df403c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
