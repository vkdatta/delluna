export const name="screen_search_desktop-fill";
export const id="dl_40b02875a5479582d073";
export const url=new URL("../icons/screen_search_desktop-fill.svg?v=ea9bd71c8ae0a7a850e284bfa2fa33879f96680d512f7e1edad8995b1fa8d60c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
