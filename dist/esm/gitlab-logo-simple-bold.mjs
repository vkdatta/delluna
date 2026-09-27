export const name="gitlab-logo-simple-bold";
export const id="dl_cfd0f554be604b5da9bd";
export const url=new URL("../icons/gitlab-logo-simple-bold.svg?v=fba0706077949022e15c79754347a5b908c3939d1badd732c4a546499457c156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
