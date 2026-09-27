export const name="gitlab-logo-light";
export const id="dl_d4f772ca4d474d47980e";
export const url=new URL("../icons/gitlab-logo-light.svg?v=ab0caa246901c04c416f1ad53d633a9289a9c6f23568019eeca4c447c1ef459d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
