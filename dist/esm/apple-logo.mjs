export const name="apple-logo";
export const id="dl_8849292ab8d14eac9b53";
export const url=new URL("../icons/apple-logo.svg?v=8fe3e68132ad88ad89363ba552e47f44c3ffbec5f87613b045f6f6f59e8fa561",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
