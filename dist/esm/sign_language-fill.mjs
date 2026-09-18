export const name="sign_language-fill";
export const id="dl_77c8be19b37343d2a32f";
export const url=new URL("../icons/sign_language-fill.svg?v=5aa9a3b3ace1b13ed7ce0a534d6784a0b6ce1b2dd0e46b6d096cc6fe189a75d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
