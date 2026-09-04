export const name="bird";
export const id="dl_f9886e16770942b3be80";
export const url=new URL("../../icons/B/bird.svg?v=31673692ae794616d65c1e6f8aa4b57bad075953ab4498d76d60dbec8f97284c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
