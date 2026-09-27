export const name="language_international-fill";
export const id="dl_765cf1edea854c6fb0ed";
export const url=new URL("../icons/language_international-fill.svg?v=99d9db83ed06bf0f233a22d9406366b766f53b089f0b64d024c5244706583549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
