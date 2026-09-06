export const name="discord-logo-bold";
export const id="dl_d5531d749d5f476f86a2";
export const url=new URL("../icons/discord-logo-bold.svg?v=361836b5553eeb30eeffd7a09a08b4ccf6d666a41d601a943ea16e8634148f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
