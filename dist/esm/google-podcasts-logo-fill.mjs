export const name="google-podcasts-logo-fill";
export const id="dl_06d835534db9480a986e";
export const url=new URL("../icons/google-podcasts-logo-fill.svg?v=97a8ad66e6730bb8c0c6f854f75de6960ad0abccdc85d62de56c5a06c1dddfb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
