export const name="content_paste_go";
export const id="dl_0e6d86b7e60af3ee43b6";
export const url=new URL("../icons/content_paste_go.svg?v=2238c299419c9f118cfbc86cd2f107ae0cebc29de74e0e1a524b93b3a35f9215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
