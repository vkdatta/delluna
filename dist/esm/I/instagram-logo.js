export const name="instagram-logo";
export const id="dl_ea049ec1aac443c4bdc2";
export const url=new URL("../../icons/I/instagram-logo.svg?v=a08dcda4ded4c6bd00c234085604d9547f03dc9f7f385f3d175bd280714848da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
