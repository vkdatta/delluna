export const name="computer_sound-fill";
export const id="dl_c0dd87dcf7804648bfa1";
export const url=new URL("../icons/computer_sound-fill.svg?v=d1be401b534cef9cc3f7e9e2bf5d9de66339e45470370d98a4d7eeb75e4dd94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
