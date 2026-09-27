export const name="gitlab-logo-simple-duotone";
export const id="dl_cd54c8d232054d22b3a7";
export const url=new URL("../icons/gitlab-logo-simple-duotone.svg?v=91fdea52a3f21a979d22ae9acb4ee462806c28cebd2dc9eabddd43850ae4ca3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
