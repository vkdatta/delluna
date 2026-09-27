export const name="contextual_token";
export const id="dl_bb31dc8709262bb67780";
export const url=new URL("../icons/contextual_token.svg?v=62d461182570c5188a82304845851071b46f72b5a453f0bd30b79fb8edb33ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
