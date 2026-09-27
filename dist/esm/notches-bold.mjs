export const name="notches-bold";
export const id="dl_43df5b95c37a4844aa88";
export const url=new URL("../icons/notches-bold.svg?v=01c6149b44fae9f9c51b8488ad285f6cb8ff6a4f549c29111fb2d4e2229f43e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
