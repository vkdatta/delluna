export const name="google-podcasts-logo-fill";
export const id="dl_06d835534db9480a986e";
export const url=new URL("../icons/google-podcasts-logo-fill.svg?v=dfdaca8f772b3da95116482e996ec67ebbcefe374635de5987772d246decdf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
